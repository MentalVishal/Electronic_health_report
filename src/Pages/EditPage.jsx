import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Text,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const EditPage = () => {
  let baseURL = "https://backend-ehr.onrender.com";
  const params = useParams();

  const navigate = useNavigate();

  const Token = useSelector((store) => store.userReducer.token);

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [gender, setGender] = useState("");
  const [doctor, setDoctor] = useState("");
  const [dob, setDob] = useState("");
  const [conditions, setConditions] = useState("");
  const [allergies, setAllergies] = useState("");

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [blood, setBlood] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}/user/users/${params.id}`).then((res) => {
      const ans = res.data.user;
      setName(ans.name);
      setemail(ans.email);
      setGender(ans.gender);
      setDoctor(ans.doctor);
      setDob(ans.dob);
      setConditions(ans.conditions);
      setAllergies(ans.allergies);
      setHeight(ans.height);
      setWeight(ans.weight);
      setBlood(ans.blood);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };
    const updatedData = {
      name: name,
      email: email,
      gender: gender,
      doctor: doctor,
      dob: dob,
      conditions: conditions,
      allergies: allergies,
      height: height,
      weight: weight,
      blood: blood,
    };
    const response = await axios.patch(
      `${baseURL}/user/update/${params.id}`,
      updatedData,
      config
    );
    toast.success("Patient Data Updated.");
    navigate("/dashboard");
  };

  return (
    <div>
      <Box p={6} maxW="xl" mx="auto">
        <Text fontSize="2xl" fontWeight="bold" color="teal.600" mb={4}>
          Edit Your Details
        </Text>
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            <GridItem>
              <FormControl id="full_name" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="full_name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="date_of_birth" isRequired>
                <FormLabel>Date of Birth</FormLabel>
                <Input
                  type="date"
                  name="date_of_birth"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="gender" isRequired>
                <FormLabel>Gender</FormLabel>
                <Select
                  name="gender"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="blood_type" isRequired>
                <FormLabel>Blood Type</FormLabel>
                <Input
                  type="text"
                  name="blood_type"
                  value={blood}
                  onChange={(e) => {
                    setBlood(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="height" isRequired>
                <FormLabel>Height</FormLabel>
                <Input
                  type="text"
                  name="height"
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem>
              <FormControl id="weight" isRequired>
                <FormLabel>Weight</FormLabel>
                <Input
                  type="text"
                  name="weight"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="allergies" isRequired>
                <FormLabel>Allergies</FormLabel>
                <Input
                  type="text"
                  name="allergies"
                  value={allergies}
                  onChange={(e) => {
                    setAllergies(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="conditions" isRequired>
                <FormLabel>Medical Conditions</FormLabel>
                <Input
                  type="text"
                  name="conditions"
                  value={conditions}
                  onChange={(e) => {
                    setConditions(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl id="doctor_preference" isRequired>
                <FormLabel>Doctor Preference</FormLabel>
                <Input
                  type="text"
                  name="doctor_preference"
                  value={doctor}
                  onChange={(e) => {
                    setDoctor(e.target.value);
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                fontWeight="bold"
                w="full"
              >
                Save Changes
              </Button>
            </GridItem>
          </Grid>
        </form>
      </Box>
    </div>
  );
};
