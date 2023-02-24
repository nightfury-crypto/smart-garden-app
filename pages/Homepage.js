import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Homepage() {
  const statusHeight = StatusBar.currentHeight;

  return (
    <View style={[styles.container]}>
      <View style={{ height: statusHeight + 20 }} />
      <Text style={styles.title}>SMART GARDEN</Text>

      {/* security */}
      <View style={styles.headingView}>
        <Text style={styles.headingTitle}>surveillance</Text>
        <Text style={{ color: "red", fontWeight: 'bold', fontSize: 18 }}>Off</Text>
      </View>
      {/* watering */}
      <View style={styles.headingView}>
        <View style={{ width: "100%" }}>
          <Text style={styles.headingTitle}>Water Status</Text>
          <View style={styles.waterTank}>
            <View style={styles.fill}></View>
          {/* levels */}
          <View style={[styles.level, { height: '10%'}]}><Text style={{color: '#fff'}}>100%</Text></View>
          <View style={[styles.level, { height: '30%'}]}></View>
          <View style={[styles.level, { backgroundColor: "rgba(0, 0, 0, 0.1)", height: '10%'}]}><Text style={{color: '#fff'}}>50%</Text></View>
          <View style={[styles.level, { backgroundColor: "rgba(0, 0, 0, 0.1)", height: '20%'}]}></View>
          <View style={[styles.level, {backgroundColor: "rgba(0, 0, 0, 0.3)", height: '30%'}]}><Text style={{color: '#fff'}}>30%</Text></View>
          </View>
        </View>
      </View>

      <View style={styles.headingView}>
        <Text style={styles.headingTitle}>Water Supply</Text>
        <Text style={{ color: "green", fontWeight: 'bold', fontSize: 18 }}>On</Text>
      </View>

      <View style={styles.headingView}>
        <Text style={styles.headingTitle}>Lights</Text>
        <Text style={{ color: "green", fontWeight: 'bold', fontSize: 18 }}>On</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgb(29, 29, 29)",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
  },
  headingView: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headingTitle: {
    fontSize: 18,
    color: "#fff",
  },
  waterTank: {
    width: 120,
    height: 160,
    marginTop: 40,
    alignSelf: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#fff",
    borderWidth: 2,
    borderTopWidth: 0,
    position: "relative",
    overflow: 'hidden'
  },
  fill: {
    width: '100%',
    height: '100%',
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "rgb(42, 71, 189)",
  },
  level: {
    position: "relative",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
