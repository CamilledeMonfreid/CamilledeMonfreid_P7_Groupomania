<template>
  <div>
    <header>
            <img src="images/icon-left-font-monochrome-white.svg" alt="logo">
        </header>

        <nav>
            <ul>
                <li>Mon profil</li>
                <li class="selected">Fil d'actualités</li>
            </ul>
        </nav>

        <main>
            <section class="post">
                <form class="post__form">
                    <label for="message" class="post__form--title">Que voulez-vous partager aujourd’hui ?</label>
                    <textarea id="message" name="message">Ecrivez votre message</textarea>
    
                    <div class="post__form--image">
                        <label for="image" class="post__form--soustitre">Une image, un GIF ?</label>
                        <input type="file" id="image" name="image" accept="image/png, image/jpeg, image/gif">
    
                    </div>
    
                    <input class="button" type="button" value="publier">
                </form>
            </section>
    
            <section class="post">
                <div class="title">
                    <h2>Quoi de neuf ?</h2>
                    <div class="background"></div>
                </div>
    
                <div class="post__message select">
                    <div class="post__message--selected">
                        <p>Camille de Monfreid</p>
                        <img src="images/close.svg" alt="close" class="cross">
                    </div>
                    <div class="post__message--media">
                        <p>Salut à tous ! <br/> Je vous souhaite une bonne semaine :)</p>
                    </div>
                </div>
    
                <div class="post__message notselect">
                    <div class="post__message--notselected">
                        <p>Marie Stuart</p>
                        <div class="like">
                            <p>4</p>
                            <img src="images/like.svg" alt="like" class="likeicon">
                        </div>
                        
                    </div>
    
                    <div class="post__message--media">
                        <img src="/images/exemple.gif">
                    </div>
                </div>
    
                <div class="post__message select">
                    <div class="post__message--selected">
                        <p>Camille de Monfreid</p>
                        <img src="images/close.svg" alt="close" class="cross">
                    </div>
                    <div class="post__message--media">
                        <p>Petite pause café !</p>
                        <img src="/images/exemple2.gif">
                    </div>
                </div>
            </section>

        </main>
        

        <footer>
            <a href="#">Mentions légales</a>
            <p>© 2021 CONNECT-E</p>
        </footer>
  </div>
</template>

<script>



</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import "../sass/styles.css";
</style>