const items = [
  {
    title: "Smart Watch",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Headphones",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Camera",
    img: "https://images.unsplash.com/photo-1519183071298-a2962be96c95?q=80&w=600&auto=format&fit=crop",
  },
];

export default function MultiSection() {
  return (
    <section className="multi" id="products">
      <h2>Featured Products</h2>

      <div className="multi-grid">
        {items.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
