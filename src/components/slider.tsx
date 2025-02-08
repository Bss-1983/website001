import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className="px-2 ml-3  ">
    <h1 className=" font-bold mb-3 mr-8">Price</h1>

<div className="text-gray-700"><Slider
      defaultValue={[50]}
      max={200}
      step={1}
      className={cn("w-[100%]", className)}
      {...props}
    />
</div>

    <div className="flex justify-around">

        <h1 className="font-bold">$50</h1>
        <h1 className="font-bold">$200</h1>
    </div>
    </div>
  )
}
