<template>
  <!-- Footer -->
  <div class="line">
    <a id="footer" href=""></a>
    <mdb-footer class="page-footer font-small lighten-5 pt-0 ">
      <!-- <div class="social">
        <mdb-container class="text-left">
          <mdb-row class="py-4 d-flex align-items-center">
            <mdb-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
            </mdb-col>
            <mdb-col md="6" lg="7" class="text-center text-md-right">
              <a class="fb-ic ml-0"><i class="fab fa-facebook white-text mr-lg-4"> </i></a>
              <a class="tw-ic"><i class="fab fa-twitter white-text mr-lg-4"> </i></a>
              <a class="gplus-ic"><i class="fab fa-google-plus white-text mr-lg-4"> </i></a>
              <a class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
              <a class="ins-ic"><i class="fab fa-instagram white-text mr-lg-4"> </i></a>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </div> -->
      <mdb-container class="mt-5 mb-4 text-center text-md-left">
        <mdb-row class="mt-3">
          <mdb-col md="3" lg="3" xl="3" class="mb-4 dark-grey-text">
            <h6 class="text-uppercase font-weight-bold"><strong>ECHOBRIDGE</strong></h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
            <p><a href="#home" class="dark-grey-text">Home</a></p>
            <p><a href="#team" class="dark-grey-text">Our Team</a></p>
            <p><a href="#partners" class="dark-grey-text">Our Partners</a></p>
            <p><a href="#about" class="dark-grey-text">About Us</a></p>
          </mdb-col>
          <mdb-col md="3" lg="3" xl="3" class="mb-4 dark-grey-text">
            <h6 class="text-uppercase font-weight-bold"><strong>Products</strong></h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
            <p><a href="#!" class="dark-grey-text">MDBootstrap</a></p>
            <p><a href="#!" class="dark-grey-text">MDWordPress</a></p>
            <p><a href="#!" class="dark-grey-text">BrandFlow</a></p>
            <p><a href="#!" class="dark-grey-text">Bootstrap Angular</a></p>
          </mdb-col>
          <mdb-col md="4" lg="4" xl="4" class="mb-4 dark-grey-text">
            <h6 class="text-uppercase font-weight-bold"><strong>Contact Us</strong></h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
            <p><i class="fas fa-home mr-3"></i> 160 Robinson Road, #14-04 Singapore Business Federation Centre
  </p>
            <p><i class="fas fa-envelope mr-3"></i> contact@echobridge.ai</p>
            <p><i class="fas fa-phone mr-3"></i> +852 5700 1218</p>
          </mdb-col>
          <mdb-col md="2" lg="2" xl="2" class="mb-4 dark-grey-text">
            <a class="fb-ic ml-0"><i class="fab fa-facebook white-text mr-lg-4"> </i></a>
            <a class="tw-ic"><i class="fab fa-twitter white-text mr-lg-4"> </i></a>
          </mdb-col>
        </mdb-row>
      </mdb-container>
      <div class="text-center py-3 copyright">
        <mdb-container fluid>
          &copy; 2020 Copyright: echoBridge.ai
        </mdb-container>
      </div>
    </mdb-footer>
  </div>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'Footer',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.social {
  background-color: #9f14db;
}
.copyright {
  color: #aaa;
}
.line {
  border-top: solid 1px #dedede;
  border-bottom: solid 1px #dedede;
}
</style>
