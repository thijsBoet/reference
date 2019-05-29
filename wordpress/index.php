<?php

bloginfo('name');               // blogname
bloginfo('description');        // blog tagline

get_header();                   // renders header.php
get_footer();                   // renders footer.php

wp_head();                      // loads <head> content </head> from functions.php

while(have_posts()) {           // while not looped through all posts
    the_post(); ?>              <!-- render post exit php to html while still in loop -->
        <h2>
        <a href=
        "<?php the_permalink(); // link of post  ?>">
        <?php the_title();      // title of post ?>
        </a></h2>
        <?php the_content();    // content of post ?>
        <hr>
    <?php 
}
                                // post url's (the_permalink()) links to single.php
                                // page url's (the_permalink()) links to page.php
