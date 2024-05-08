import { type ReactElement } from 'react'
import Image from 'next/image'

interface CardProps {
  title?: string
  sub?: string
  iconImage: string
  color: string
  list: string[]
  id: string
}

const Card = ({
  title,
  sub,
  iconImage,
  color,
  list
}: CardProps): ReactElement => {
  const textColor =
    color === 'bg-sail-200' ? 'text-persian-blue' : 'text-white-100'
  const bullet =
    color === 'bg-sail-200' ? 'bullet-star-dark' : 'bullet-star-light'
  const imgBg = "bg-[url('/assets/images/icons/icon-monster.webp"
  return (
    <article
      className={`
      ${color}
      ${imgBg}
      flex flex-col p-12 rounded-3xl md:max-w-[337px] mb-6
      bg-contain bg-top bg-no-repeat shadow-xl
    `}
    >
      <div className="flex flex-row justify-between items-center">
        <h4
          className={`leading-relaxed font-acumin-bold text-lg ${iconImage} ${textColor}`}
        >
          {title}
        </h4>
        <div
          className={`w-[48px] h-[49px]
        `}
        >
          <Image
            alt=""
            width={51}
            height={51}
            src={`/assets/images/icons/${iconImage}`}
          />
        </div>
      </div>
      <p className={`leading-relaxed text-left text-xs mt-5 ${textColor}`}>
        {sub}
      </p>
      <ul className="py-3">
        {list.map((item) => (
          <li
            key={item}
            className={`flex items-center flex-row leading-relaxed text-xs text-left ${textColor} text-sm mt-1 h-[50px]`}
          >
            <div className={'w-[13px] h-[13px] mr-3'}>
              <Image
                alt=""
                width={10}
                height={10}
                src={`/assets/images/icons/${bullet}.webp`}
              ></Image>
            </div>
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Card
