import { FC } from "react"
import './assets/styles/compiled-css/Block.css'

import SVG_next from './assets/img/next.svg'

interface IItem {
  id?: number,
  shortName?: string,
  fullName: string,
  type: string,
  price: number,
  speed?: number
}

interface IWikiBlock {
  shortName: string,
  fullName: string,
  description: string,
  items: IItem[]
}

interface IBlockHelp {
  block: IWikiBlock,
  onClick: (block: IWikiBlock) => void
}

const BlockHelp: FC<IBlockHelp> = ({ block, onClick }) => {
  return(
    <>
      <div className="block-help" onClick={() => onClick(block)}>
        <img className="bg-block" src={`assets/Wiki/BACKGROUND/${block.shortName}.jpg`} />
        <div className="left-block">
          <span className="title">{block.fullName}</span>
          <span className="description">{block.description}</span>
        </div>
        <img className="svg-next" src={SVG_next} />
      </div>
    </>
  )
}

export default BlockHelp