import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParam } from "src/@types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootParam, "groups">;
};

export function Groups({ navigation }: Props) {
  const [groups, setGroups] = useState<string[]>(["Galera da Rocket"]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={ListEmpty({
          message: "Que tal cadastrar  a primeira turma?",
        })}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup}/>
    </Container>
  );
}
