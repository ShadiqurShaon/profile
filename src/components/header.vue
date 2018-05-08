<template>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Profile</a>
        </div>
        <div class="mynav">
          <ul class="nav navbar-nav">
            <li><router-link to="/portfolio">Portfolio</router-link></li>
            <li><router-link to="/portfolio">Sponsors</router-link></li>
            <li><a href="#">Participants</a></li>
            <li><a href="#">Vendors</a></li>
            <li><a href="#">Entertainment</a></li>
            
          </ul>
          <!-- <ul class="nav navbar-nav navbar-right">
            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul> -->
        </div>
      </div>
    </nav>
</template>

<style>
.navbar {
  margin-bottom: 0;
  border-radius: 0;
  background-color: #294c84;
  color: black;
}
.navbar-inverse .navbar-nav > li > a {
  color: rgb(255, 241, 240);
  text-decoration: none;
  font-weight: bold;
  padding-left: 9px;
  color: aliceblue;
  display: inline;
}

.navbar-inverse .navbar-nav > li > a:hover {
 color: rgb(251, 255, 0);
}
.mynav ul{
    display: inline;
    text-align: center;
}
.navbar-brand{
    color: wheat;
}
.navbar-brand:hover{
   color: rgb(251, 255, 0);
}
.mynav{
   width: 85%;
   text-align: center;
}

</style>

