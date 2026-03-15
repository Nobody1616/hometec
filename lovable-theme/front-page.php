<?php
/**
 * Front Page Template
 *
 * Main one-page layout for Home-tec with animations.
 *
 * @package Lovable_Theme
 */

get_header();
?>

<main>

    <!-- ===== Hero Slider ===== -->
    <section class="hero">
        <div class="hero-slides">
            <div class="hero-slide active">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/hero-1.png' ); ?>" alt="Hero 1" class="hero-bg">
            </div>
            <div class="hero-slide">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/hero-2.png' ); ?>" alt="Hero 2" class="hero-bg">
            </div>
            <div class="hero-slide">
                <img src="<?php echo esc_url( get_template_directory_uri() . '/assets/hero-3.png' ); ?>" alt="Hero 3" class="hero-bg">
            </div>
        </div>
        <div class="hero-overlay"></div>

        <!-- Slide indicators -->
        <div class="hero-dots">
            <button class="hero-dot active" aria-label="Slide 1"></button>
            <button class="hero-dot" aria-label="Slide 2"></button>
            <button class="hero-dot" aria-label="Slide 3"></button>
        </div>

        <div class="container-narrow">
            <div class="hero-content fade-in-up">
                <h1>Home-tec GbR – Ihr Partner für Wohnungsbau und Renovierung in Elsdorf</h1>
                <p>Zuverlässige Beratung, saubere Umsetzung und professionelle Lösungen für Bau- und Renovierungsprojekte.</p>
                <div class="hero-buttons">
                    <a href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>" class="btn btn-hero">
                        Angebot anfragen →
                    </a>
                    <a href="tel:017643338686" class="btn btn-hero-outline">
                        📞 Jetzt anrufen
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== Intro ===== -->
    <section class="section-padding section-intro">
        <div class="container-narrow reveal">
            <h2 class="section-title">Kompetenz und Zuverlässigkeit aus Elsdorf</h2>
            <p class="section-subtitle">
                Home-tec GbR steht für kompetente Beratung, zuverlässige Ausführung und persönliche Betreuung. Wir unterstützen unsere Kunden in Elsdorf und Umgebung bei Bau-, Renovierungs- und Modernisierungsprojekten.
            </p>
        </div>
    </section>

    <!-- ===== Vorteile ===== -->
    <section class="section-padding section-advantages">
        <div class="container-narrow">
            <h2 class="section-title reveal">Warum Home-tec?</h2>
            <div class="grid-4">
                <div class="advantage-card reveal" data-reveal-delay="0">
                    <div class="advantage-icon">🛡️</div>
                    <h3>Qualität</h3>
                    <p>Hochwertige Materialien und saubere Verarbeitung</p>
                </div>
                <div class="advantage-card reveal" data-reveal-delay="100">
                    <div class="advantage-icon">⏰</div>
                    <h3>Termintreue</h3>
                    <p>Pünktliche Fertigstellung Ihrer Projekte</p>
                </div>
                <div class="advantage-card reveal" data-reveal-delay="200">
                    <div class="advantage-icon">👥</div>
                    <h3>Persönliche Betreuung</h3>
                    <p>Direkter Ansprechpartner für Ihr Vorhaben</p>
                </div>
                <div class="advantage-card reveal" data-reveal-delay="300">
                    <div class="advantage-icon">🔧</div>
                    <h3>Erfahrung</h3>
                    <p>Kompetenz aus zahlreichen Projekten</p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== Leistungen ===== -->
    <section class="section-padding section-services">
        <div class="container-narrow">
            <h2 class="section-title reveal">Unsere Leistungen</h2>
            <div class="grid-2">

                <div class="card reveal" data-reveal-delay="0">
                    <div class="img-placeholder">Bild einfügen</div>
                    <div class="card-body">
                        <h3>Wohnungsbau</h3>
                        <p>Professioneller Wohnungsbau in Elsdorf – von der Planung bis zur schlüsselfertigen Übergabe.</p>
                        <a href="<?php echo esc_url( home_url( '/leistungen' ) ); ?>" class="card-link hover-lift">Mehr erfahren →</a>
                    </div>
                </div>

                <div class="card reveal" data-reveal-delay="100">
                    <div class="img-placeholder">Bild einfügen</div>
                    <div class="card-body">
                        <h3>Renovierung &amp; Sanierung</h3>
                        <p>Fachgerechte Renovierung und Sanierung für Ihr Zuhause – zuverlässig und termingerecht.</p>
                        <a href="<?php echo esc_url( home_url( '/leistungen' ) ); ?>" class="card-link hover-lift">Mehr erfahren →</a>
                    </div>
                </div>

                <div class="card reveal" data-reveal-delay="200">
                    <div class="img-placeholder">Bild einfügen</div>
                    <div class="card-body">
                        <h3>Innenausbau</h3>
                        <p>Hochwertiger Innenausbau nach Ihren Wünschen – Böden, Wände, Decken und mehr.</p>
                        <a href="<?php echo esc_url( home_url( '/leistungen' ) ); ?>" class="card-link hover-lift">Mehr erfahren →</a>
                    </div>
                </div>

                <div class="card reveal" data-reveal-delay="300">
                    <div class="img-placeholder">Bild einfügen</div>
                    <div class="card-body">
                        <h3>Individuelle Bauprojekte</h3>
                        <p>Maßgeschneiderte Baulösungen für besondere Anforderungen und individuelle Projekte.</p>
                        <a href="<?php echo esc_url( home_url( '/leistungen' ) ); ?>" class="card-link hover-lift">Mehr erfahren →</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- ===== Projekte ===== -->
    <section class="section-padding section-projects">
        <div class="container-narrow">
            <h2 class="section-title reveal">Unsere Projekte</h2>
            <p class="section-subtitle reveal">Einblicke in ausgewählte Bau- und Renovierungsprojekte aus Elsdorf und Umgebung.</p>
            <div class="grid-3">
                <div class="card reveal" data-reveal-delay="0">
                    <div class="img-placeholder img-placeholder-square">Projektfoto einfügen</div>
                    <div class="card-body">
                        <h3>Projekt 1</h3>
                        <p>Projektbeschreibung hier einfügen.</p>
                    </div>
                </div>
                <div class="card reveal" data-reveal-delay="100">
                    <div class="img-placeholder img-placeholder-square">Projektfoto einfügen</div>
                    <div class="card-body">
                        <h3>Projekt 2</h3>
                        <p>Projektbeschreibung hier einfügen.</p>
                    </div>
                </div>
                <div class="card reveal" data-reveal-delay="200">
                    <div class="img-placeholder img-placeholder-square">Projektfoto einfügen</div>
                    <div class="card-body">
                        <h3>Projekt 3</h3>
                        <p>Projektbeschreibung hier einfügen.</p>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8">
                <a href="<?php echo esc_url( home_url( '/projekte' ) ); ?>" class="btn btn-outline hover-lift">
                    Alle Projekte ansehen →
                </a>
            </div>
        </div>
    </section>

    <!-- ===== CTA ===== -->
    <section class="section-padding section-cta">
        <div class="container-narrow reveal">
            <h2 class="section-title">Bereit für Ihr Projekt?</h2>
            <p class="section-subtitle">Kontaktieren Sie uns für eine unverbindliche Beratung. Wir freuen uns auf Ihr Vorhaben!</p>
            <div style="margin-top:2rem;display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
                <a href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>" class="btn btn-hero hover-lift">
                    Angebot anfragen →
                </a>
                <a href="tel:017643338686" class="btn btn-outline hover-lift">
                    📞 0176 43338686
                </a>
            </div>
        </div>
    </section>

</main>

<?php get_footer(); ?>
