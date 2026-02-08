import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Toys",
    href: "/produits",
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517604/purrball/Section2_-_Featured_Cat_Toy.jpg.webp",
    span: "col-span-1 row-span-2",
  },
  {
    name: "Fournitures",
    href: "/fournitures",
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517763/purrball/petfount.webp",
    span: "col-span-1 row-span-1",
  },
]

export default function ShopByCategory() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight text-center mb-3">
          Magasiner par Catégorie
        </h2>
        <p className="text-neutral-500 text-sm md:text-base text-center mb-10 max-w-xl mx-auto">
          Trouvez exactement ce qu'il faut pour votre compagnon félin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-white text-xl font-bold">{cat.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
