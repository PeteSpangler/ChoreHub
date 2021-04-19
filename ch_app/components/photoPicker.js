import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import uploadToAnonymousFilesAsync from "anonymous-files";
import styles from "./assets/appStyles";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";

const [selectedImage, setSelectedImage] = React.useState(null);

let openImagePickerAsync = async () => {
  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (permissionResult.granted === false) {
    alert("Permission to access camera roll is required!");
    return;
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync();

  if (pickerResult.cancelled === true) {
    return;
  }
  if (Platform.OS === "web") {
    let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
    setSelectedImage({ localUri: pickerResult.url, remoteUri });
  } else {
    setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
  }

  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(
        `Uh oh, sharing isnt available on your platform, but is available at: ${selectedImage.remoteUri}`
      );
      return;
    }

    await Sharing.shareAsync(selectedImage.localUri);
  };

  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
          <Text styles={styles.buttonText}>Share this photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
export default openImagePickerAsync;
