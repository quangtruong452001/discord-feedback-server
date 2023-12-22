# Discord-feedback-server

Deploy url: `http://54.206.122.125`
</br>
Database: **MongoDB**
</br>

**_Notes_**: I used [mockaroo](https://www.mockaroo.com/) to generate the sample data.

## Deploy

I used Github Action service for CI/CD to deploy the server to AWS EC2 instance
</br>
[EC2 instance Public IP](http://54.206.122.125) : `http://54.206.122.125`

Data schema of comment:

```
    comment: String,
    discord_userID: Number,
    discord_username: String,
    discord_channelID: Number,
    status: {
      type: String,
      enum: ['new', 'resolved'],
      default: 'new',
    },
    status_event: {
      type: Date,
      default: null,
    },
```

## API

### GET api/comment

Retrieves all comments.

**Response**: response should look like:

```json
{
  "message": "Comments retrieved successfully",
  "status": 200,
  "metadata": [
    {
      "_id": "657cc225fc13ae382ffa2525",
      "comment": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      "discord_userID": 6562460000000000000,
      "discord_username": "bkynochc",
      "discord_channelID": 8086110000000000000,
      "status": "new",
      "status_event": null
    },
    {
      "_id": "657cc225fc13ae382ffa252a",
      "comment": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      "discord_userID": 4631140000000000000,
      "discord_username": "amattusovh",
      "discord_channelID": 6795420000000000000,
      "status": "new",
      "status_event": null
    }
  ]
}
```

### POST api/comment

Creates a new comment.

**Request**

Body

```json
{
  "comment": "Game is great",
  "discord_userID": 729643359739707414,
  "discord_username": "Reazz",
  "discord_channelID": 1172095402745536512
}
```

**Response**: response should look like:

```json
{
  "message": "Game is great",
  "status": 200,
  "metadata": {
    "comment": "assasaassa",
    "discord_userID": 729643359739707400,
    "discord_username": "Reazz",
    "discord_channelID": 1172095402745536500,
    "status": "new",
    "status_event": null,
    "_id": "657caa4c99e5b22fe96e62a9",
    "createdAt": "2023-12-15T19:34:36.209Z",
    "updatedAt": "2023-12-15T19:34:36.209Z",
    "__v": 0
  }
}
```

### PUT api/comment/:id

Updates status of a specific comment.

**Request**

Params:

- `id`: The ID of the comment to update.

**Response**: response should look like:

```json
{
  "message": "Comment updated successfully",
  "status": 200,
  "metadata": {
    "_id": "657cc225fc13ae382ffa2525",
    "comment": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    "discord_userID": 6562460000000000000,
    "discord_username": "bkynochc",
    "discord_channelID": 8086110000000000000,
    "status": "resolved",
    "status_event": "2023-12-15T21:24:40.684Z",
    "createdAt": "2023-12-26T04:09:10.000Z",
    "updatedAt": "2023-12-15T21:24:40.685Z"
  }
}
```
