import { useContext } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Text from "../../../components/Text";
import Icon from "../../../components/Icon";
import { images } from "../../../constants/images";
import { ThemeContext } from "../../../contexts/theme";
import { useGenericTempState } from "../../../states/genericStates";

const ListHeader = () => {
  const { theme } = useContext(ThemeContext);
  const { searchData, setSearchData } = useGenericTempState();
  return (
    <View
      style={[
        styles.serverContainer,
        {
          borderBottomColor: theme.separatorBorderColor,
          backgroundColor: theme.listHeaderBackgroundColor,
        },
      ]}
    >
      <View style={styles.iconContainer}>
        <Icon image={images.icons.locked} size={17} />
      </View>
      <View style={[styles.commonFieldContainer, styles.hostNameContainer]}>
        <Pressable
          style={[styles.commonFieldContainer, { paddingRight: 10 }]}
          onPress={() => {
            setSearchData("sortPlayer", "none");
            setSearchData("sortPing", "none");
            setSearchData("sortMode", "none");
            if (searchData.sortName === "none") {
              setSearchData("sortName", "descending");
            } else if (searchData.sortName === "descending") {
              setSearchData("sortName", "ascending");
            } else {
              setSearchData("sortName", "none");
            }
          }}
        >
          {searchData.sortName !== "none" && (
            <Text
              bold
              size={4}
              color={theme.primary}
              style={{ marginRight: 2, top: -1 }}
            >
              {searchData.sortName === "descending" ? "↓" : "↑"}
            </Text>
          )}
          <Text semibold size={1} color={theme.textPrimary + "AA"}>
            Name
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flex: 0.5,
          minWidth: 300,
          flexDirection: "row",
        }}
      >
        <Pressable
          style={[styles.commonFieldContainer, styles.pingFieldContainer]}
          onPress={() => {
            setSearchData("sortPlayer", "none");
            setSearchData("sortName", "none");
            setSearchData("sortMode", "none");
            if (searchData.sortPing === "none") {
              setSearchData("sortPing", "descending");
            } else if (searchData.sortPing === "descending") {
              setSearchData("sortPing", "ascending");
            } else {
              setSearchData("sortPing", "none");
            }
          }}
        >
          {searchData.sortPing !== "none" && (
            <Text
              bold
              size={4}
              color={theme.primary}
              style={{ marginRight: 2, top: -1 }}
            >
              {searchData.sortPing === "descending" ? "↓" : "↑"}
            </Text>
          )}
          <Text semibold size={1} color={theme.textPrimary + "AA"}>
            Ping
          </Text>
        </Pressable>

        <Pressable
          style={[styles.commonFieldContainer, styles.gameModeContainer]}
          onPress={() => {
            setSearchData("sortPlayer", "none");
            setSearchData("sortPing", "none");
            setSearchData("sortName", "none");
            if (searchData.sortMode === "none") {
              setSearchData("sortMode", "descending");
            } else if (searchData.sortMode === "descending") {
              setSearchData("sortMode", "ascending");
            } else {
              setSearchData("sortMode", "none");
            }
          }}
        >
          {searchData.sortMode !== "none" && (
            <Text
              bold
              size={4}
              color={theme.primary}
              style={{ marginRight: 2, top: -1 }}
            >
              {searchData.sortMode === "descending" ? "↓" : "↑"}
            </Text>
          )}
          <Text semibold size={1} color={theme.textPrimary + "AA"}>
            Mode
          </Text>
        </Pressable>
        <Pressable
          style={[styles.commonFieldContainer, styles.playersFieldContainer]}
          onPress={() => {
            setSearchData("sortPing", "none");
            setSearchData("sortName", "none");
            setSearchData("sortMode", "none");
            if (searchData.sortPlayer === "none") {
              setSearchData("sortPlayer", "descending");
            } else if (searchData.sortPlayer === "descending") {
              setSearchData("sortPlayer", "ascending");
            } else {
              setSearchData("sortPlayer", "none");
            }
          }}
        >
          {searchData.sortPlayer !== "none" && (
            <Text
              bold
              size={4}
              color={theme.primary}
              style={{ marginRight: 2, top: -1 }}
            >
              {searchData.sortPlayer === "descending" ? "↓" : "↑"}
            </Text>
          )}
          <Text semibold size={1} color={theme.textPrimary + "AA"}>
            Players
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  serverContainer: {
    height: 26,
    paddingRight: 8,
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  iconContainer: {
    height: 24,
    width: 23,
    marginRight: 1,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  commonFieldContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
  },
  hostNameContainer: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: "flex-start",
  },
  playersFieldContainer: {
    paddingRight: 5,
    width: 80,
    justifyContent: "flex-end",
  },
  pingFieldContainer: {
    width: 50,
    justifyContent: "flex-end",
  },
  gameModeContainer: {
    flex: 1,
    maxWidth: 450,
    minWidth: 170,
    paddingLeft: 10,
    justifyContent: "flex-start",
  },
});

export default ListHeader;
