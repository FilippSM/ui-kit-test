import { Slider } from 'radix-ui'
import s from './slider.module.scss'


export const SliderDemo = () => (
  <form>
    <Slider.Root className={s.sliderRoot} defaultValue={[50]} max={100} step={1}>
      <Slider.Track className={s.sliderTrack}>
        <Slider.Range className={s.sliderRange} />
      </Slider.Track>
      <Slider.Thumb className={s.sliderThumb} aria-label="Volume" />
    </Slider.Root>
  </form>
)
