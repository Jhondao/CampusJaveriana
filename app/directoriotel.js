import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { Home } from "../components/Icons";

export default function Directorio() {
  return (
    <ScrollView className="pt-24">
      <Link asChild href="/" className="text-black mb-4 font-bold">
        <Pressable>
          <Home />
        </Pressable>
      </Link>
      <Text className="text-black font-bold mb-8 text-2xl">
        Directorio teléfonico administrativo
      </Text>
      <Text className="text-black mb-4">
        LLorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        similique facilis vel, sit maxime dolore atque suscipit repellendus esse
        delectus nulla praesentium officia repudiandae inventore illo assumenda
        maiores, dignissimos commodi. Delectus nulla laborum, enim repellat
        praesentium nostrum in suscipit cupiditate error. Alias delectus
        laudantium blanditiis neque consectetur, accusamus esse ad aperiam, sunt
        excepturi dignissimos nulla. Voluptatibus inventore architecto facere
        aut? Voluptatum voluptas facilis delectus nobis nemo consectetur, ut
        tempore rerum saepe maiores,
      </Text>
    </ScrollView>
  );
}
