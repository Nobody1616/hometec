<?php
/**
 * The main template file
 *
 * @package Lovable_Theme
 */

get_header();
?>

<main>
    <?php if ( have_posts() ) : ?>
        <?php while ( have_posts() ) : the_post(); ?>
            <article class="section-padding">
                <div class="container-narrow">
                    <h2><?php the_title(); ?></h2>
                    <div style="margin-top:1rem;">
                        <?php the_content(); ?>
                    </div>
                </div>
            </article>
        <?php endwhile; ?>
    <?php else : ?>
        <section class="section-padding">
            <div class="container-narrow text-center">
                <p>Keine Inhalte gefunden.</p>
            </div>
        </section>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
