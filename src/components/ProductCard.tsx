import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation";


interface Product {
  id: number
  name: string
  price: number
  image: string
}

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <Card>
      <CardHeader>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent>
        <CardTitle>{product.name}</CardTitle>
        <p className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => router.push("/cart")}>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

