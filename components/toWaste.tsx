<View style={containers.addActivityOption}>
          <Text style={{
            ...fonts.activityName,
            ...fonts.addActivityPropName,
          }}>
            Type:
          </Text>
          <View style={containers.addActivityValues}>
            <Pressable
              style={{
                ...containers.optionItem,
              }}
              onPress={() => toggleCountableMenu(!isCountableSelected)}
            >
              <Text style={{
                ...fonts.activityName,
                textAlign: "right",
                textDecorationLine: isCountableSelected ? "underline" : "none",
                color: isCountableSelected ? "#2C9C24" : "#FFFFFF",
              }}>
                countable
              </Text>
            </Pressable>
            <Pressable
              style={{
                ...containers.optionItem,
              }}
            >
              <Text style={{
                ...fonts.activityName,
                textAlign: "center",
              }}>
                yes / no
              </Text>
            </Pressable>
            {
              isCountableSelected && (
                <>
                  <Text style={{
                    ...fonts.activityName,
                    ...containers.optionItem,
                    textAlign: "right",
                    lineHeight: 35,
                  }}>
                    value:
                  </Text>
                  <TextInput
                    style={{
                      ...fonts.activityName,
                      ...containers.optionItem,
                      textAlign: "center",
                      paddingLeft: 10,
                      lineHeight: 23,
                      textDecorationLine: "underline",
                    }}
                    defaultValue="0"
                  />
                </>
              )
            }
          </View>
        </View>
        <View style={containers.addActivityOption}>
          <Text style={{
            ...fonts.activityName,
            ...fonts.addActivityPropName,
          }}>
            Tiering:
          </Text>
          <View style={containers.addActivityValues}>
            <Pressable style={containers.optionItem}>
              <Text style={{
                ...fonts.activityName,
                textAlign: "right"
              }}>
                standard
              </Text>
            </Pressable>
            <Pressable style={containers.optionItem}>
              <Text style={{
                ...fonts.activityName,
                textAlign: "center"
              }}>
                custom
              </Text>
            </Pressable>
          </View>
        </View>