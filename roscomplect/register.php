<?php require_once('header.php'); ?>

<section class="register">
    <div class="container">
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-7">
                <div class="authImage">
                    <img class="authImageDesktop" src="images/registration.png" alt="Login" />
                    <img class="authImageTablet" src="images/adaptive/registration_adaptive.png" alt="Login" />
                </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-5">
                <div class="authInfo">
                    <h1 class="pageTitle">Регистрация</h1>
                    <div class="authForm">
                        <form action="">
                            <p class="formSubtitle">Основные данные</p>
                            <input type="text" placeholder="Имя" id="authFormEmail">
                            <input type="text" placeholder="Фамилия" id="authFormEmail">
                            <input type="text" placeholder="E-mail" id="authFormPass">
                            <input type="password" placeholder="Пароль" id="authFormPass">
                            <input type="password" placeholder="Подтвердите пароль" id="authFormPass">
                            <div class="authFormRememb">
                                <div class="authFormCheck">
                                    <div class="authFormCheckWr">
                                        <input type="checkbox">
                                        <span></span>
                                    </div>
                                    <div class="authFormCheckText">
                                        <span>Соглашение с политикой конфеденциальности</span>
                                    </div>
                                </div>
                            </div>
                            <button class="uthFormBtn btn_mainstyle" id="authFormSubmit">Зарегестрироваться</button>
                            <div class="registerBottom">
                                <p>Вы уже зарегистрированы?</p>
                                <p><a href="">Войти в аккаунт</a></p>
                            </div>
                        </form>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</section>



<?php require_once('footer.php'); ?>