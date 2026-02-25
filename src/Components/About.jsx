import React from 'react';

export default function About(props) {
    const styles = {
        container: { fontFamily: "'Inter', sans-serif", color: '#1a1a1a', lineHeight: '1.6' },
        hero: {
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com")', // Example fashion image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center'
        },
        section: { padding: '80px 10%', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' },
        title: { fontSize: '2.5rem', marginBottom: '20px', fontWeight: '700', textTransform: 'uppercase' },
        textSide: { flex: '1', minWidth: '300px' },
        imageSide: { flex: '1', minWidth: '300px' },
        storyImage: { width: '100%', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' },
        valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginTop: '40px' },
        valueCard: { textAlign: 'center', padding: '20px', border: '1px solid #eee', borderRadius: '8px' }
    };

    return (
        <div style={styles.container}>
            {/* Hero Section */}
            <div style={styles.hero}>
                <div>
                    <h1 style={{ fontSize: '4rem', margin: 0 }}>Beyond Fashion</h1>
                    <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Crafting confidence, one stitch at a time.</p>
                </div>
            </div>

            {/* Our Story Section */}
            <section style={styles.section}>
                <div style={styles.textSide}>
                    <h2 style={styles.title}>Our Story</h2>
                    <p>
                        Started in a small garage in 2024, our clothing brand was born out of 
                        a simple idea: <b>style shouldn't compromise comfort.</b> We believe 
                        that what you wear is an extension of your personality.
                    </p>
                    <p>
                        Every fabric we choose and every cut we design is made with the 
                        modern individual in mind—someone who values quality, 
                        sustainability, and effortless elegance.
                    </p>
                </div>
                <div style={styles.imageSide}>
                    <img 
                        src="https://images.unsplash.com" 
                        alt="Fashion Design" 
                        style={styles.storyImage} 
                    />
                </div>
            </section>

            {/* Values Section */}
            <section style={{ ...styles.section, backgroundColor: '#f9f9f9', display: 'block' }}>
                <h2 style={{ ...styles.title, textAlign: 'center' }}>Why Choose Us</h2>
                <div style={styles.valuesGrid}>
                    <div style={styles.valueCard}>
                        <h3>Premium Quality</h3>
                        <p>We source only the finest organic cotton and sustainable materials.</p>
                    </div>
                    <div style={styles.valueCard}>
                        <h3>Ethical Craft</h3>
                        <p>Our clothes are made in factories that prioritize fair wages and safety.</p>
                    </div>
                    <div style={styles.valueCard}>
                        <h3>Timeless Design</h3>
                        <p>We don't follow fast trends. We create pieces that stay in style for years.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
