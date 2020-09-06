<template>
  <mdb-navbar position="top" color="light-blue" dark transparent scrolling>
    <mdb-container>
      <mdb-navbar-brand href="#"><strong>yon</strong></mdb-navbar-brand>
      <mdb-navbar-toggler style="max-width: 1140px">
        <mdb-navbar-nav left>
          <mdb-nav-item waves-fixed active>Home</mdb-nav-item>
          <mdb-nav-item waves-fixed>blog</mdb-nav-item>
          <mdb-nav-item waves-fixed>photo</mdb-nav-item>
        </mdb-navbar-nav>
        <!--Search form -->
        <mdb-navbar-nav right>
          <form>
            <mdb-input type="text" class="text-white f-flex" placeholder="Search" aria-label="Search" navInput waves waves-fixed/>
          </form>
        </mdb-navbar-nav>
        <!--/.Search form -->
      </mdb-navbar-toggler>
    </mdb-container>
  </mdb-navbar>
</template>

<script>
  import {  mdbNavbar, 
            mdbNavbarBrand, 
            mdbInput,
            mdbNavbarToggler,
            mdbNavbarNav,
            mdbNavItem, 
            mdbContainer,
          } from 'mdbvue';
  export default {
    components: {
      mdbNavbar,
      mdbNavbarBrand,
      mdbNavbarToggler,
      mdbNavbarNav,
      mdbNavItem,
      mdbInput,
      mdbContainer,
    }
  }
</script>

<style scoped>
  .top-nav-collapse {
    background-color: #82b1ff !important;
  }
</style>