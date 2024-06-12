function Certifications() {
  return (
    <section>
      <h3>Certifications</h3>
      <h4>freeCodeCamp Certifications</h4>
      <SoftwareCert
        name="Responsive Web Design"
        link="https://www.freecodecamp.org/certification/TrashP/responsive-web-design"
      />
      <SoftwareCert
        name="JS Algorithms and DS"
        link="https://www.freecodecamp.org/certification/TrashP/javascript-algorithms-and-data-structures"
      />
      <h4>cisco Certifications</h4>
      <SoftwareCert
        name="Networking Basics"
        link="https://www.credly.com/badges/ff2a5d58-e478-4f55-a318-2fa3da1288c6/public_url"
      />
      <SoftwareCert
        name="Python Essentials I"
        link="https://www.credly.com/badges/3cf01296-3ae3-4b08-92c0-6e57bfce6c48/public_url"
      />
    </section>
  );
}

function SoftwareCert({ name, link }) {
  return (
    <a href={link} target="_blank" className="certLink">
      <div className="certifications">
        <p>{name}</p>
      </div>
    </a>
  );
}

export default Certifications;
