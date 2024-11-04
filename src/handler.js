const addNoteHandler = (request, h) => {
  try {
    const { title, tags, body } = request.payload;
    if (!title || !tags || !body) {
      const response = h.response({
        status: "fail",
        message: "Gagal menambahkan catatan. Mohon isi title, tags, dan body.",
      });
      response.code(400);
      return response;
    }

    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const newNote = {
      id,
      title,
      tags,
      body,
      createdAt,
      updatedAt,
    };

    notes.push(newNote);

    const response = h.response({
      status: "success",
      message: "Catatan berhasil ditambahkan",
      data: {
        noteId: id,
      },
    });
    response.code(201);
    return response;
  } catch (error) {
    const response = h.response({
      status: "error",
      message: "Gagal menambahkan catatan",
    });
    response.code(500);
    return response;
  }
};