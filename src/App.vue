<template>
  <h1>New Character</h1>

  <FormKit type="form">
    <FormKit
      type="text"
      name="name"
      id="name"
      validation="required|not:Admin"
      label="Name"
      help="Enter your character's full name"
      placeholder="“Scarlet Sword”"
    />

    <FormKit
      type="select"
      label="Class"
      name="class"
      id="class"
      placeholder="Select a class"
      :options="['Warrior', 'Mage', 'Assassin']"
    />
  </FormKit>

  <FormKit type="my-input" />
  <FormKit type="pincode" :digits="6" />
</template>