<?php session_start();?>

<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Login - เข้าสู่ระบบ</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<link rel="stylesheet" href="css/pinks.css">
<link rel="icon" href="image/CHILL.jpg">
<script src="sweetalert2.all.min.js"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
<?php
        require_once('connect.php'); // ดึงไฟล์เชื่อมต่อ Database เข้ามาใช้งาน
        /**
         * ตรวจสอบเงื่อนไขที่ว่า ตัวแปร $_POST['submit'] ได้ถูกกำหนดขึ้นมาหรือไม่
         */
        if (isset($_POST['submit'])) { 
            /**
             * กำหนดตัวแปรเพื่อมารับค่า
             */
            $username =  $conn->real_escape_string($_POST['username']);
            $password = $conn->real_escape_string($_POST['password']);
            /**
             * สร้างตัวแปร $sql เพื่อเก็บคำสั่ง Sql
             * จากนั้นให้ใช้คำสั่ง $conn->query($sql) เพื่อที่จะประมาณผลการทำงานของคำสั่ง sql
             */
            $sql = "SELECT * FROM `users` WHERE `username` = '".$username."' AND `password` = '".$password."'";
            $result = $conn->query($sql);

            /**
             * ตรวจสอบการเข้าสู่ระบบ
             */
            if($result->num_rows > 0){
                /**
                 * แสดงข้อมูลของ user 
                 * เก็บข้อมูลเข้าสู่ session เพื่อนำไปใช้งาน 
                 */
                $row = $result->fetch_assoc();
                $_SESSION['id'] = $row['id'];
                $_SESSION['first_name'] = $row['first_name'];
                $_SESSION['last_name'] = $row['last_name'];
                $_SESSION['picture'] = $row['picture'];
                header('location:index.php');
            }else echo '<script>
            swal("เสียใจจัง!", "ชื่อผู้ใช้ และ รหัสผ่านไม่ถูกต้อง", "error");
           </script>';
        }
    ?>
<!-- partial:index.partial.html -->
<div lang="fr" ng-app="delf">
  <main class="main__templates" ng-controller="index" ng-init="ModalControl('modal', 'true')"> 
    <!-- INIT particles.js container -->
    <div class="login" id="particles-js"></div>
    <!-- FIN particles.js container -->
    <div id="modal__overlay" modal="modal__overlay"></div>
    <div class="container__absolute flex justify-center align-items-center">
      <!--button( id='botonModal' class='' ng-click="ModalControl('modal', 'true')") INICIAL SESIÓN-->
      <div class="formLogin">
        <!-- div(class='modal__close' ng-click="ModalControl('modal', 'false')") X-->
        <div class="formLogin__header ta-c">
          <h1 class="formLogin__header--title">เข้าสู่ระบบ</h1>
        </div>
        <div class="formLogin__content">
          <section>
            <form class="row" action="" method="POST">
              <div class="input-field ">
                <label for="username"></label>
                <input placeholder="ชื่อผู้ใช้" id="username" type="text" name="username"/>
              </div>
              <div class="input-field  mt30">
                <label for="password"></label>
                <input placeholder="รหัสผ่าน" id="password" type="password" name="password"/>
              </div>
          </section>
        </div>
        <div class="formLogin__footer flex justify-center">
        <input type="submit" name="submit" class="btn btn-success" value="เข้าสู่ระบบ">
        </div>
        </form>
      </div>
    </div>
  </main>
</div>
<!-- ===================================-->
<!--script(src='https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js')-->
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular.min.js'></script>
<script src='https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></script><script  src="./login.js"></script>

</body>
</html>
