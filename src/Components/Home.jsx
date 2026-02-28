import React from 'react';

export default function Home(props) {
    const theme = {
        deepPurple: '#2D0B5A', // Rich Royal Purple
        lavender: '#E0B0FF',   // Soft highlight
        electric: '#8A2BE2',   // Vibrant accent
        offWhite: '#FAF9F6',
        darkText: '#120226'
    };

    const styles = {
        container: { fontFamily: "'Poppins', sans-serif", color: theme.darkText, backgroundColor: theme.offWhite },
        hero: {
            height: '90vh',
            background: `linear-gradient(135deg, ${theme.deepPurple} 0%, #4B0082 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        },
        heroOverlay: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'url("https://images.unsplash.com")',
            backgroundSize: 'cover',
            opacity: 0.3,
            zIndex: 1
        },
        heroContent: { position: 'relative', zIndex: 2, padding: '0 20px' },
        badge: {
            backgroundColor: theme.lavender,
            color: theme.deepPurple,
            padding: '5px 15px',
            borderRadius: '20px',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            marginBottom: '20px',
            display: 'inline-block'
        },
        title: { fontSize: '5rem', fontWeight: '900', margin: '10px 0', letterSpacing: '-2px' },
        cta: {
            marginTop: '30px',
            padding: '18px 45px',
            backgroundColor: 'white',
            color: theme.deepPurple,
            textDecoration: 'none',
            fontWeight: 'bold',
            borderRadius: '50px',
            display: 'inline-block',
            transition: 'transform 0.3s ease',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
        },
        section: { padding: '100px 8%' },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '15px',
            overflow: 'hidden',
            transition: '0.3s',
            border: `1px solid ${theme.lavender}44` // Subtle border
        },
        cardImage: { width: '100%', height: '450px', objectFit: 'cover' },
        cardBody: { padding: '20px', textAlign: 'center' }
    };

    return (
        <div style={styles.container}>
            {/* HERO SECTION */}
            <section style={styles.hero}>
                <div style={styles.heroOverlay}></div>
                <div style={styles.heroContent}>
                    <span style={styles.badge}>2026 Spring Drop</span>
                    <h1 style={styles.title}>ROYAL <span style={{ color: theme.lavender }}>STREET</span></h1>
                    <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                        Bold textures and deep hues. Discover the collection that redefines luxury streetwear.
                    </p>
                    <a href="/shop" style={styles.cta} 
                       onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                       onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
                        Explore Collection
                    </a>
                </div>
            </section>

            {/* PRODUCT GRID */}
            <section style={styles.section}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: theme.deepPurple }}>The Purple Edit</h2>
                    <a href="/shop" style={{ color: theme.electric, fontWeight: '600' }}>View All →</a>
                </div>

                <div style={styles.grid}>
                    {/* Item 1 */}
                    <div style={styles.card}>
                        <img src="https://images.unsplash.com" style={styles.cardImage} alt="Purple hoodie" />
                        <div style={styles.cardBody}>
                            <h3 style={{ margin: '0 0 5px 0' }}>Lavender Oversized Hoodie</h3>
                            <p style={{ color: theme.electric, fontWeight: '700' }}>$120.00</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div style={styles.card}>
                        <img src="https://images.unsplash.com" style={styles.cardImage} alt="Dress shirt" />
                        <div style={styles.cardBody}>
                            <h3 style={{ margin: '0 0 5px 0' }}>Midnight Silk Shirt</h3>
                            <p style={{ color: theme.electric, fontWeight: '700' }}>$145.00</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div style={styles.card}>
                        <img src="https://images.unsplash.com" style={styles.cardImage} alt="Jacket" />
                        <div style={styles.cardBody}>
                            <h3 style={{ margin: '0 0 5px 0' }}>Imperial Bomber Jacket</h3>
                            <p style={{ color: theme.electric, fontWeight: '700' }}>$210.00</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}