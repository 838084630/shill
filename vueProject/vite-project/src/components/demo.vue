<template>
  <div>
    <div class="top-title">
      <div><span @click="lastMonth" class="link">⋘</span></div>
      <div><span>{{year}}年{{month}}月</span></div>
      <div><span @click="nextMonth" class="link">⋙</span></div>
    </div>
    <div class="container" style="border-bottom: 1px solid #cccccc">
      <div v-for="(item,index) in weeks" :key="index">{{ item }}</div>
    </div>
    <div class="container" style="padding: 1vh 1vh 3vh 1vh;">
      <div v-for="(item,index) in data" :key="index">
        <div v-if="compareToNow(item) === 0" style="color: #2d8cf0">{{ item.date }}</div>
        <div v-if="compareToNow(item) === 1">{{ item.date }}</div>
        <div v-if="compareToNow(item) === -1">
          <div>{{ item.date }}</div>
        </div>
        <!-- <div v-if="compareToNow(item) === -1" class="otherDay">
          <div>{{ item.date }}</div>
          <div class="date-desc">补卡</div>
        </div> -->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      today:new Date(),
      now:new Date(),
      weeks:["日","一","二","三","四","五","六"],
      year:"",
      month:"",
      date:"",
      firstDay:"",
      data:[],
    };
  },
  mounted() {
    this.getNow();
  },
  methods:{
    getNow(){
      this.year = this.now.getFullYear();
      this.month = this.now.getMonth() + 1;
      this.date = this.now.getDate();
      this.now.setDate(1);
      this.firstDay = this.now.getDay();
      this.initData();
    },
    getMonthDay(month){
      if ([1,3,5,7,8,10,12].includes(month)) {
        return 31
      } else if ([4,6,9,11].includes(month)) {
        return 30
      } else if (month === 2) {
        //  判断当年是否为闰年
        if (
          (this.year % 4 === 0 && this.year % 100 !== 0) ||
          this.year % 400 === 0
        ) {
          return 29
        } else {
          return 28
        }
      }
    },
    initData(){
      this.data = [];
      let days = this.getMonthDay(this.month);
      for (let i = 0; i < this.firstDay; i++) {
        this.data.push({
          year:"",
          month:"",
          date:"",
        });
      }
      for (let i = 0; i < days; i++) {
        this.data.push(
          {
            year: this.year,
            month: this.month,
            date: i + 1,
          }
        );
      }
    },
    lastMonth(){
      this.now.setMonth(this.now.getMonth() - 1);
      this.getNow();
    },
    nextMonth(){
      this.now.setMonth(this.now.getMonth() + 1);
      this.getNow();
    },
    compareToNow(item){
      // console.log('----'+item.date);
      if (item.year && item.month && item.date) {
        let date1 = new Date();
        date1.setFullYear(item.year)
        date1.setMonth(item.month - 1)
        date1.setDate(item.date)
        date1.setHours(0)
        date1.setMinutes(0)
        date1.setSeconds(0)
        let now = new Date();
        now.setHours(0)
        now.setMinutes(0)
        now.setSeconds(0)
        console.log(date1)
        console.log('11111'+now);
        

        if (date1.getTime() > now.getTime()){
          return 1
        }else if (date1.getTime() === now.getTime()){
          return 0
        }else if (date1.getTime() < now.getTime()){
          return -1
        }
      }
    }
  }
}
</script>


<style scoped lang="less">
  .top-title{
    display: grid;
    grid-template-columns:repeat(3,1fr);
    grid-auto-rows:40px;
    grid-gap:1rem;
    background-color: #FFFFFF;
    border-bottom: 1px solid #cccccc;
    line-height: 40px;
  }
  .container{
    display: grid;
    grid-template-columns:repeat(7,1fr);
    grid-auto-rows:40px;
    grid-gap:1rem;
    background-color: #FFFFFF;
    line-height: 40px;

    div{
      text-align: center;
    }
  }
  .today{
    background: url("../assets/circle_success.png") no-repeat center center;
    background-size: 95% 95%;
    position: relative;
  }
  .otherDay{
    // background: url("../assets/circle_error.png") no-repeat center center;
    // background-size: 2% 2%;
    position: relative;
  }
  .link{
    font-size: 14px;
    color: #2d8cf0;
  }
  .date-desc{
    display: block;
    position: absolute;
    width: 2vw;
    top: 1vw;
    left: -0.2vw;
    font-size: 0.8vw;
    color: green;
  }
</style>
