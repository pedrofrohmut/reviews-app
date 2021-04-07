import React from "react"
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Keyboard
} from "react-native"
import { Formik } from "formik"
import * as yup from "yup"

import globalStyles from "../../styles/global"

import FlatButton from "../../shared/flat-button"

const reviewSchema = yup.object().shape({
  title: yup.string().required().min(3).max(64),
  body: yup.string().required().min(3).max(256),
  rating: yup
    .string()
    .required()
    .test(
      "is-num-1-to-5",
      "Rating must be a number 1 - 5",
      val => parseInt(val, 10) <= 5 && parseInt(val, 10) >= 1
    )
})

const ReviewForm = ({ addReview, setIsModalOpen }) => (
  <View style={globalStyles.container}>
    <Formik
      initialValues={{
        title: "",
        body: "",
        rating: ""
      }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        addReview(values)
        actions.resetForm()
        Keyboard.dismiss()
        setIsModalOpen(false)
      }}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <View>
          <View style={globalStyles.inputGroup}>
            <Text style={localStyles.label}>Title</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Title"
              onChangeText={handleChange("title")}
              value={values.title}
            />
            {errors.title && (
              <Text style={globalStyles.errorText}>{errors.title}</Text>
            )}
          </View>
          <View style={globalStyles.inputGroup}>
            <Text style={localStyles.label}>Body</Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Body"
              onChangeText={handleChange("body")}
              value={values.body}
            />
            {errors.body && (
              <Text style={globalStyles.errorText}>{errors.body}</Text>
            )}
          </View>
          <View style={{ ...globalStyles.inputGroup, marginBottom: 23 }}>
            <Text style={localStyles.label}>Rating</Text>
            <TextInput
              style={{ ...globalStyles.input }}
              placeholder="Rating 1 to 5"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
            />
            {errors.rating && (
              <Text style={globalStyles.errorText}>{errors.rating}</Text>
            )}
          </View>
          <FlatButton title="Add" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  </View>
)

const localStyles = StyleSheet.create({
  label: {
    marginBottom: 2,
    paddingLeft: 4,
    fontSize: 12,
    color: "#666"
  }
})

export default ReviewForm
