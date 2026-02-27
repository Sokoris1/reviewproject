import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Text } from "../components/Text"

export const Home = () => {
  return (
    <div className='flex flex-col items-center text-center h-200 pt-20'> {/* flex flex-col временное рещение, по идее*/}
      {/* <a className="block">Home</a> */}
      <Text
          color="primary"
          size="small"
          text="Home"
      ></Text>
      <Text
          color="primary"
          size="medium"
          text="Home"
      ></Text>
      <Text
          color="primary"
          size="large"
          text="Home"
      ></Text>
      <Button
          color="primary"
          size="small"
          title="Написать обзор"
          onClick={alert}
      ></Button>
      <Button
          color="primary"
          size="small"
          title="Написать ####"
          onClick={alert}
          disabled={true}
      ></Button>
      <Input
        type="email"
        size="small"
        color="primary"
        placeholder="Ваш email"
      />
    </div>
  )
}
