<?php require_once('header.php'); ?>

<section class="cabinet">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="pageBreadcrumbs">
                    <ul>
                        <li><a href="">Главная</a></li>
                        <li><img src="images/breadcrumb-ellipse.png" alt="Breadcrumb Icon"></li>
                        <li><a href="">Авторизация</a></li>
                        <li><img src="images/breadcrumb-ellipse.png" alt="Breadcrumb Icon"></li>
                        <li><a class="breadcrumbActive" href="">Личный кабинет</a></li>
                    </ul>
                    </div>
                    <div class="row cabinetBlock">
                        <div class="col-12 col-sm-3 col-lg-3">
                            <div class="cabinetLeftMenu">
                                <ul>
                                    <li><a href="">Мой профиль</a></li>
                                    <li><a href="">История заказов</a></li>
                                    <li><a href="">Текущие заказы</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-6">
                            <div class="cabinetForms">
                                <div class="cabinetMobileMenu">
                                    <div class="mpage_catalog">
                                        <p>Мой профиль</p>
                                        <i class="fa fa-angle-right"></i>
                                    </div>
                                </div>
                                <h1 class="pageTitle">Ваш логин</h1>
                                <div class="cabinetImgMobile">
                                    <img src="images/cabinet_photo.png" alt="Profile Img Mobile">
                                </div>
                                <div class="cabinetFormRadio">
                                    <div class="cabinetFormRadioInput">
                                        <div class="cabinetFormRadioInputButton cabinetFormRadioInputActive"></div><p>Физическое лицо</p>
                                        <div class="cabinetFormRadioInputButton"></div><p>Юридическое лицо</p>
                                    </div>                                        
                                </div>
                                <form class="cabinetFormsItem" action="">
                                    <input type="text" placeholder="Имя" />
                                    <input type="text" placeholder="Фамилия" />
                                    <input type="text" placeholder="E-mail" />
                                    <input type="text" placeholder="Номер телефона" id="mpage__feedback_phone" />
                                    <div class="cabinetFormsItemButton">
                                        <button class="btn_mainstyle">Изменить</button>
                                    </div>
                                </form>
                                <form class="cabinetFormsItem cabinetFormsItemNone" action="">
                                    <input type="text" placeholder="ИП / ООО" />
                                    <input type="text" placeholder="ИНН" />
                                    <input type="text" placeholder="ОГРН / ОГРНИП" />
                                    <input type="text" placeholder="Номер телефона" id="mpage__feedback_phone" />
                                    <div class="cabinetFormsItemButton">
                                        <button class="btn_mainstyle">Изменить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-12 col-sm-3 col-lg-3">
                            <div class="cabinetImg">
                                <img src="images/cabinet_photo.png" alt="Login Image">
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    </div>
</section>
<?php require_once('footer.php'); ?>