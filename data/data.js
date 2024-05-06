// Make an allergy inventory, similar to the books inventory with name, email,bio, and an id field.
// _id:1 (make up ids with three mock entries.)

const mongoose = require('mongoose');

const allergySchema = new mongoose.Schema({
    name: {
        type: string,
        required: true
    },
    email: {
        type: string,
        required: true
    },
    description: string,
    severity: {
        type: string,
        enum: ['Mild', 'Moderate', 'Severe']
    },

    
    triggers:{
    type: [string],
    symptoms: [string],
    diagnosisDate: Date,
    treatmentPlan: String,
    medicalHistory: String,
    additionalNotes: String
    },

    
    
});

module.exports = mongoose.model('Allergy', allergySchema);
