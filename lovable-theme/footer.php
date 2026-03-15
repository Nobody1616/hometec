<footer class="site-footer">
    <div class="container-narrow">
        <div class="footer-grid">
            <div>
                <strong style="font-size:1.125rem;"><?php bloginfo( 'name' ); ?></strong>
                <p style="margin-top:0.75rem;">
                    Ihr zuverlässiger Partner für Wohnungsbau und Renovierung in Elsdorf und Umgebung.
                </p>
            </div>

            <div>
                <h4>Navigation</h4>
                <nav class="footer-nav">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Startseite</a>
                    <a href="<?php echo esc_url( home_url( '/leistungen' ) ); ?>">Leistungen</a>
                    <a href="<?php echo esc_url( home_url( '/projekte' ) ); ?>">Projekte</a>
                    <a href="<?php echo esc_url( home_url( '/ueber-uns' ) ); ?>">Über uns</a>
                    <a href="<?php echo esc_url( home_url( '/kontakt' ) ); ?>">Kontakt</a>
                </nav>
            </div>

            <div>
                <h4>Kontakt</h4>
                <div style="margin-top:0.75rem;display:flex;flex-direction:column;gap:0.75rem;">
                    <a href="tel:017643338686">📞 0176 43338686</a>
                    <span>📍 Birkenweg 7-11, 50189 Elsdorf</span>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            &copy; <?php echo date( 'Y' ); ?> Home-tec GbR. Alle Rechte vorbehalten.
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
