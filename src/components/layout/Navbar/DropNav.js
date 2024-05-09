export default function DropNav() {
    const columns = [
      {
        heading: "Homes for Sale",
        items: [
          "Homes for sale",
          "New construction",
          "Foreclosures",
          "Coming soon",
          "Home Buying Guide",
          "Foreclosure center",
          "Real estate app",
          "Down payment assistance"
        ]
      },
      {
        heading: "Resources",
        items: [
          "For sale by owner",
          "Recent home sales",
          "Open houses",
          "All homes"
        ]
      }
    ];
  
    return (
      <div className="bg-white flex justify-between px-8 py-4 lg:w-full">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 border-l-2 border-zinc-200 px-8">
            <h3 className="font-bold text-lg mb-4">{column.heading}</h3>
            <ul>
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  