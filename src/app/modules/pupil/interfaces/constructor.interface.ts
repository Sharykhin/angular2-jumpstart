import { EventsInterface } from './events.interface'

export interface ConstructorInterface extends EventsInterface {
  new(): ConstructorInterface
}