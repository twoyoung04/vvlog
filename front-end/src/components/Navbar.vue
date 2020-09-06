<template>
  <mdb-navbar color="default" dark class="justify-content-between">
    <mdb-navbar-brand href="#">
      Navbar
    </mdb-navbar-brand>
    <mdb-form-inline>
        <mdb-input class="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
      <mdb-btn outline="white" size="sm" class="my-0" type="submit">Search</mdb-btn>
    </mdb-form-inline>
  </mdb-navbar>
</template>

<script>
  import { mdbNavbar, mdbNavbarBrand, mdbBtn, mdbFormInline, mdbInput } from 'mdbvue';
  export default {
    components: {
      mdbNavbar,
      mdbBtn,
      mdbNavbarBrand,
      mdbFormInline,
      mdbInput
    }
  }
</script>