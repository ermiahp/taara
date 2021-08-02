<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
      <ScrollUp :scroll-duration="1000" scroll-y="250"/>
      <div class="section ">
      <div class="firstone" style="background-image: url('/images/landing/back.jpg')">
        <div>
          <h2>سامانه‌ی تحلیل عکس آزمایشگاه رایانش امن دانشگاه تهران</h2>
        </div>
        <div>
          <h5>تعارا</h5>
        </div>
        <img src="/icon.png" class="logo" width="90px"/>
        <img src="/logo/ut.svg" class="logo2" width="70px"/>
      </div>
      <img class="scroll" src="/images/landing/black.gif" width="20px" style="left: 50%">
    </div>
    <div class="section">
      Second section ...
      <img class="scroll" src="/images/landing/white.gif" width="100px">
    </div>
    <div class="section">
      3Second section ...
      <img class="scroll" src="/images/landing/white.gif" width="100px">
    </div>
    <div class="section" style="justify-content: center">
      <div class="container" style="height: 100%;justify-content: center;align-items: center;padding-top: 15%">
          <div class="row">
            <div class="col-12 col-md-6">
              <iframe src="https://map.ir/lat/35.724370/lng/51.387842/z/15/p/آزمایشگاه رایانش امن دانشگاه تهران" height="350" width="100%" style="border: none;border-radius: 10px;"></iframe>
            </div>
            <div class="col-12 col-md-6 text-center">
              <div class="address">
                <img src="/icon.png" width="150px">
                <p style="color: white">تهران، خیابان کارگر شمالی، پردیس دانشکده‌های فنی دانشگاه تهران، دانشکده مهندسی برق و کامپیوتر، ساختمان شماره‌ی۲، طبقه‌ی -۱، آزمایشگاه رایانش امن دانشگاه تهران</p>
              </div>
              <div class="maddress">
                <label>Test </label>
                <p style="color: white">تهران، خیابان کارگر شمالی، پردیس دانشکده‌های فنی دانشگاه تهران، دانشکده مهندسی برق و کامپیوتر، ساختمان شماره‌ی۲، طبقه‌ی -۱، آزمایشگاه رایانش امن دانشگاه تهران</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </full-page>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      options: {
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'contact-us'],
        sectionsColor: ['#fff','#d18ef7', '#35e4fe', '#6f59b9']
      },
    }
  }
}
</script>

<style>
  .firstone{
    color: #443c78;
    height: 100vh;
    width: 100vw;
    background-position: center;
    background-size:cover ;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
  .logo{
    position: absolute;
    top: 20px;
    right: 50px;
  }
  .logo2{
    position: absolute;
    top: 20px;
    left: 50px;
  }
  .section{
    position: relative;
  }
  .scroll{
    position: absolute;
    bottom: 20px;
    left: 46%;
    margin: auto;
  }
  .address{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

  }
  .maddress{
    display: none;
  }
  @media (max-width: 992px) {
    .scroll{
      left: 35%;
    }
    .maddress{
      display: flex;
    }
    .maddress p{
      font-size: 14px;
      text-align: center;
    }
    .address{
      display: none;
    }
      .firstone h2{
          justify-content: center;
          text-align: center;
          font-size: 21px;
      }
      .firstone h5{
          font-size: 15px;
      }
      .logo{
          position: absolute;
          top: 20px;
          right: 20px;
          width: 50px;
      }
      .logo2{
          position: absolute;
          top: 20px;
          left: 20px;
          width: 35px;
      }
  }
</style>
