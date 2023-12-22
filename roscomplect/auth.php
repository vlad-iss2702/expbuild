<?php require_once('header.php'); ?>

<section class="auth">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-7">
                <div class="authImage">
                    <img class="authImageDesktop" src="images/login.png" alt="Login" />
                    <img class="authImageTablet" src="images/adaptive/login_adaptive.png" alt="Login" />
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-5">
                <div class="authInfo">
                    <h1 class="pageTitle">Авторизация</h1>
                    <div class="authForm">
                        <form action="">
                            <input type="text" placeholder="E-mail" id="authFormEmail">
                            <input type="password" placeholder="Пароль" id="authFormPass">
                            <div class="authFormRememb">
                                <div class="authFormCheck">
                                    <div class="authFormCheckWr">
                                        <input type="checkbox">
                                        <span></span>
                                    </div>
                                    <div class="authFormCheckText">
                                        <span>Запомнить меня</a></span>
                                    </div>
                                </div>
                                <p class="authFormForgot"><a href="">Забыли пароль?</a></p>
                            </div>
                            <button class="uthFormBtn btn_mainstyle" id="authFormSubmit">Войти в аккаунт</button>
                        </form>
                    </div>
                    <div class="authElse">
                        <p class="authElseTitle">Впервые на нашем сайте?</p>
                        <p class="authElseText">Id at suspendisse venenatis pellentesque eget mattis orci, ac. In felis pellentesque ipsum, mi, commodo.</p>
                        <p class="authElseLink"><a href="">Зарегестрироваться</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<?php require_once('footer.php'); ?>