export default function  CardItem({card: {title, image, description}}) {
  return (
    <div className="flex flex-col items-center text-center pt-14 pb-10 p-4 rounded-lg bg-white shadow-shcus">
        <img className="w-36 h-36" src={image} />
        <h3 className="text-lg font-semibold text-primary-brand-color mt-6">{title}</h3>
        <p className="text-sm text-gray-500 mt-2 leading-6 px-10">{description}</p>
    </div>

  )
}
