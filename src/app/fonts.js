import { Rajdhani, Open_Sans} from 'next/font/google'

export const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic']
})