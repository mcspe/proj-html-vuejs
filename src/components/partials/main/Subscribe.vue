<script>
  export default {
    name: 'Subscribe',
  }
</script>

<template>
  <section>
    <div class="container my-5 py-5">
      <div class="form d-flex-col-a-center my-5 py-5">
        <div class="input d-flex-j-between-a-center p-5">
          <input type="text" class="pill" placeholder="First Name">
          <input type="text" class="pill" placeholder="Last Name">
          <input type="text" class="pill" placeholder="Email Address">
        </div>
        <div class="submit d-flex-j-center-a-center py-5 mb-5">
          <button class="pill">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
</template>  

<style lang="scss" scoped>
  @use '../../../scss/general/vars' as *;
  section {
    .container {
      background: url('/form-bg-1.png');
      background-size: cover;
      .pill {
        padding: 1rem 1rem;
        border-radius: 2rem;
      }
      .form {
        .input {
          width: 85%;
          input {
            width: 30%;
            background: none;
            border: 1px solid white;
            font-size: 1rem;
            &::placeholder {
              color: white;
            }
            &:focus {
              outline: none;
              border: 2px solid lightgray;
              &::placeholder {
                color: lightgray;
              }
            }
          }
        }
      }
      .submit {
        button {
          background: $primary-dark-blue;
          padding: 1rem 2.5rem;
          font-weight: bold;
          transition: all .3s ease-in;
          &:hover {
            background: whitesmoke;
            color: black;
            transition: all .3s ease-in;
          }
        }
      }
    }
  }
</style>