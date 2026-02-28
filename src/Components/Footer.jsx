export default function Footer(props) {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h2 style={styles.logo}>My Website</h2>
        <p style={styles.text}>
          © {new Date().getFullYear()} All Rights Reserved
        </p>

        <div style={styles.links}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>About</a>
          <a href="#" style={styles.link}>Contact</a>
          <a href="#" style={styles.link}>TodoTask</a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#6A0DAD",   // Purple
    color: "white",
    padding: "30px 20px",
    marginTop: "40px"
  },
  container: {
    maxWidth: "1000px",
    margin: "auto",
    textAlign: "center"
  },
  logo: {
    margin: "0 0 10px 0"
  },
  text: {
    margin: "10px 0",
    color: "#f3e8ff"   // light white-purple
  },
  links: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "20px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};