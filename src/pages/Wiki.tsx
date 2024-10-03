import { useState } from 'react'
import './assets/styles/compiled-css/Wiki.css'

import { wikiBlock } from '../config/wiki'
import BlockHelp from "../components/Wiki/Block"
import ModalHelp from '../components/Wiki/Modal'

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

const Wiki = () => {
  const [activeBlock, setActiveBlock] = useState<IWikiBlock | null>(null)

  const handleBlockClick = (block: IWikiBlock) => {
    setActiveBlock(block)
  }

  const handleCloseBlock = () => {
    setActiveBlock(null)
  }

  return(
    <>
      <div className="help">
        
        <ul className="list-h-block">
          { wikiBlock.map((block) => (
              <BlockHelp block={block} onClick={handleBlockClick} />
          )) }
        </ul>
      </div>
      { activeBlock && (
        <ModalHelp block={activeBlock} onClose={handleCloseBlock} />
      ) }
    </>
  )
}

export default Wiki