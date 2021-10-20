<template>
  <div>
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
  </div>
</template>

<script>



</script>


