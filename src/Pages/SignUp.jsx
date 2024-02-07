import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserSignup } from "../Redux/UserReducer/action";

export function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [gender, setGender] = useState("");
  const [doctor, setDoctor] = useState("");
  const [dob, setDob] = useState("");
  const [conditions, setConditions] = useState("");
  const [allergies, setAllergies] = useState("");
  const [password, setPassword] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [blood, setBlood] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      gender: gender,
      doctor: doctor,
      dob: dob,
      conditions: conditions,
      allergies: allergies,
      password: password,
      height: height,
      weight: weight,
      blood: blood,
    };

    dispatch(UserSignup(data)).then((res) => {
      navigate("/login");
    });
  };

  return (
    <Box as="section" p={4}>
      <Stack direction={["column", "column", "row"]} spacing={0}>
        <Box
          flex={["none", "none", 1]}
          py={[5, 8, 6]}
          px={[2, 3, 4]}
          style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        >
          <Stack spacing={6}>
            <Text fontSize="3xl" fontWeight="bold" color="teal.600">
              Sign up
            </Text>
            <Stack spacing={4}>
              <form onSubmit={handleSubmit}>
                <Stack direction={["column", "row"]} spacing={4}>
                  <FormControl id="name" isRequired>
                    <FormLabel fontSize="lg">Full Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      size="md"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel fontSize="lg">Email address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      size="md"
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4}>
                  <FormControl id="password" isRequired>
                    <FormLabel fontSize="lg">Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      size="md"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="dob" isRequired>
                    <FormLabel fontSize="lg">Date of Birth</FormLabel>
                    <Input
                      type="date"
                      size="md"
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4}>
                  <FormControl id="gender" isRequired>
                    <FormLabel fontSize="lg">Gender</FormLabel>
                    <Select
                      placeholder="Select your gender"
                      size="md"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>
                  <FormControl id="bloodType" isRequired>
                    <FormLabel fontSize="lg">Blood Type</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your blood type"
                      size="md"
                      onChange={(e) => setBlood(e.target.value)}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4}>
                  <FormControl id="height" isRequired>
                    <FormLabel fontSize="lg">Height</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter your height in cm"
                      size="md"
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="weight" isRequired>
                    <FormLabel fontSize="lg">Weight</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter your weight in kg"
                      size="md"
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4}>
                  <FormControl id="allergies" isRequired>
                    <FormLabel fontSize="lg">Allergies</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your allergies"
                      size="md"
                      onChange={(e) => setAllergies(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="conditions" isRequired>
                    <FormLabel fontSize="lg">Medical Conditions</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your medical conditions"
                      size="md"
                      onChange={(e) => setConditions(e.target.value)}
                    />
                  </FormControl>
                </Stack>
                <Stack direction={["column", "row"]} spacing={4}>
                  <FormControl id="doctorPreference" isRequired>
                    <FormLabel fontSize="lg">Doctor Preference</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your preferred doctor"
                      size="md"
                      onChange={(e) => setDoctor(e.target.value)}
                    />
                  </FormControl>
                </Stack>
                <Button
                  mt={3}
                  type="submit"
                  colorScheme="teal"
                  size="lg"
                  fontWeight="bold"
                  w="full"
                  rightIcon={<FaArrowRight />}
                >
                  Create Account
                </Button>
              </form>
              <Text mt={2} fontSize="lg" color="gray.600">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    navigate("/login");
                  }}
                  style={{ cursor: "pointer", color: "blueviolet" }}
                >
                  Sign in
                </span>
              </Text>
              <Stack spacing={3}>
                <Button
                  variant="outline"
                  colorScheme="black"
                  fontWeight="bold"
                  w="full"
                >
                  Sign up with Google
                </Button>
                <Button
                  variant="outline"
                  colorScheme="facebook"
                  fontWeight="bold"
                  w="full"
                >
                  Sign up with Facebook
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Box flex={["none", "none", 1]}>
          <Box
            h="full"
            w="full"
            bgSize="cover"
            bgPos="center"
            bgImage="url('https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')"
            borderRadius="md"
          />
        </Box>
      </Stack>
    </Box>
  );
}
