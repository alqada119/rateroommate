const connection = require("../connection");

// Get all roommates
exports.getRoomMates = (req, res) => {
    const query = 'SELECT * FROM Roommate';
    connection.query(query, (err, data) => {
        if (err) {
            console.error("Error fetching roommates:", err);
            return res.status(500).json({ "Error": "Internal Server Error" });
        }
        res.json(data);
    });
};

// Rate a roommate
exports.rateARoommate = (req, res) => {
    const { name, cleanRating, quietRating, smellRating, roomName, description } = req.body;
    // Validate the input
    if (!name || !cleanRating || !quietRating || !smellRating || !roomName || !description) {
        return res.status(400).json({ "Error": "Missing required fields" });
    }

    const query = `INSERT INTO ROOMMATE ( name, cleanRating, quietRating, smellRating, roomName, description) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [ name, cleanRating, quietRating, smellRating, roomName, description];

    connection.query(query, values, (err, data) => {
        if (err) {
            console.error("Error inserting roommate rating:", err);
            return res.status(500).json({ "Error": "Internal Server Error" });
        }
        res.json(data);
    });
};

exports.getRoommateById = (req,res) => {
    const {id} = req.params;
    const query = 'SELECT * FROM ROOMMATE WHERE ID = ?'
    connection.query(query,[id],(err,data) =>{
        if (err) {
            console.error("Error inserting roommate rating:", err);
            return res.status(500).json({ "Error": "Internal Server Error" });
        }
        console.log(query);
        res.json(data);
    });
}


