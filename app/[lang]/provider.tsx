//== Modules
import Cookies from "universal-cookie"

type Props = {}

export default function provider({ }: Props) {
  const cookies = new Cookies();
  return (
    <div>provider</div>
  )
}