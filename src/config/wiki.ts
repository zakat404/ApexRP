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

export const wikiBlock: IWikiBlock[] = [
  {
    shortName: 'vehicles',
    fullName: '🚘 Транспорт',
    description: 'Полный список транспорта, который есть на сервере',
    items: [
      { shortName: 'kanjo', fullName: 'Kanjo', type: 'Обычный', price: 8000, speed: 190 },
      { shortName: 'kanjo', fullName: 'Kanjo', type: 'Обычный', price: 19000, speed: 200 },
      { shortName: 'kanjo', fullName: 'Kanjo', type: 'Обычный', price: 25000, speed: 200 },
      { shortName: 'kanjo', fullName: 'Kanjo', type: 'Обычный', price: 3000, speed: 200 },
      { shortName: 'kanjo', fullName: 'Kanjo', type: 'Обычный', price: 3400, speed: 200 },
      { shortName: 'Ubermacht', fullName: 'Ubermacht 18', type: 'Electro', price: 3300000, speed: 288 },
    ]
  },
  {
    shortName: 'house',
    fullName: '🏡 Недвижимость',
    description: 'Список всей недвижимость сервера и информация о ней',
    items: [
      { id: 20, fullName: 'Недвижимость #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Недвижимость #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Недвижимость #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Недвижимость #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Недвижимость #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Недвижимость #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Недвижимость #20', type: 'Премиум', price: 120000 },
    ]
  },
  {
    shortName: 'business',
    fullName: '💎 Бизнесы',
    description: 'Список всех бизнесов, которые находятся на сервере.',
    items: [
      { id: 20, fullName: 'Бизнес #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Бизнес #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Бизнес #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Бизнес #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Бизнес #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Бизнес #20', type: 'Премиум', price: 120000 },
      { id: 20, fullName: 'Бизнес #20', type: 'Премиум', price: 120000 },
    ]
  },
  {
    shortName: 'male_clothes',
    fullName: '🧔 Мужская одежда',
    description: 'Список всей мужской одежды и обуви',
    items: [
      { id: 20, fullName: 'Толстовка #1', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #1', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #1', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #1', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #1', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #1', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #1', type: 'Редкое', price: 9000000 },
    ]
  },
  {
    shortName: 'female_clothes',
    fullName: '👸 Женская одежда',
    description: 'Список всей женской одежды и обуви',
    items: [
      { id: 20, fullName: 'Толстовка #12', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #12', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #12', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #12', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #12', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #12', type: 'Редкое', price: 9000000 },
      { id: 20, fullName: 'Толстовка #12', type: 'Редкое', price: 9000000 },
    ]
  },
  {
    shortName: 'skins',
    fullName: '🌟 Скины',
    description: 'Список скинов, которые есть на сервере',
    items: [
      { id: 20, fullName: 'Скин #87', type: 'Уникальное', price: 1200000 },
      { id: 20, fullName: 'Скин #87', type: 'Уникальное', price: 1200000 },
      { id: 20, fullName: 'Скин #87', type: 'Уникальное', price: 1200000 },
      { id: 20, fullName: 'Скин #87', type: 'Уникальное', price: 1200000 },
      { id: 20, fullName: 'Скин #87', type: 'Уникальное', price: 1200000 },
      { id: 20, fullName: 'Скин #87', type: 'Уникальное', price: 1200000 },
      { id: 20, fullName: 'Скин #87', type: 'Уникальное', price: 1200000 },
    ]
  },
  {
    shortName: 'items',
    fullName: '🔧 Предметы',
    description: 'Список предметов, которые есть на сервере',
    items: [
      { id: 20, fullName: 'Бумбокс', type: 'Обычное', price: 12000 },
      { id: 20, fullName: 'Бумбокс', type: 'Обычное', price: 12000 },
      { id: 20, fullName: 'Бумбокс', type: 'Обычное', price: 12000 },
      { id: 20, fullName: 'Бумбокс', type: 'Обычное', price: 12000 },
      { id: 20, fullName: 'Бумбокс', type: 'Обычное', price: 12000 },
      { id: 20, fullName: 'Бумбокс', type: 'Обычное', price: 12000 },
      { id: 20, fullName: 'Бумбокс', type: 'Обычное', price: 12000 },
    ]
  },
]