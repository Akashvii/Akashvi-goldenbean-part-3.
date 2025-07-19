import React, { useEffect, useState } from "react";

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", drink: "", dineIn: false });

  // Fetch all orders
  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/orders");
      if (!res.ok) throw new Error("Failed to fetch orders");
      const data = await res.json();
      setOrders(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete an order
  const handleDelete = async (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:3000/api/orders/${orderId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete order");
      fetchOrders();
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  // Begin editing
  const startEdit = (order) => {
    setEditingOrderId(order._id);
    setEditForm({
      name: order.name,
      drink: order.drink,
      dineIn: order.dineIn,
    });
  };

  // Submit edit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/orders/${editingOrderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) throw new Error("Failed to update order");

      setEditingOrderId(null);
      setEditForm({ name: "", drink: "", dineIn: false });
      fetchOrders();
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>All Orders</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {orders.map((order) => (
            <li key={order._id} style={{ marginBottom: "30px", borderBottom: "1px solid #ccc", paddingBottom: "15px" }}>
              {editingOrderId === order._id ? (
                <form onSubmit={handleEditSubmit}>
                  <label>
                    Name: <input type="text" value={editForm.name} onChange={(e) => setEditForm({ ...editForm, name: e.target.value })} />
                  </label><br />
                  <label>
                    Drink: <input type="text" value={editForm.drink} onChange={(e) => setEditForm({ ...editForm, drink: e.target.value })} />
                  </label><br />
                  <label>
                    Dine In: 
                    <input type="checkbox" checked={editForm.dineIn} onChange={(e) => setEditForm({ ...editForm, dineIn: e.target.checked })} />
                  </label><br />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditingOrderId(null)}>Cancel</button>
                </form>
              ) : (
                <>
                  <strong>Name:</strong> {order.name} <br />
                  <strong>Drink:</strong> {order.drink} <br />
                  <strong>Order Type:</strong> {order.dineIn ? "Dine In" : "Take Away"} <br />
                  <strong>Order Date:</strong> {new Date(order.orderDate).toLocaleString()} <br />
                  <button onClick={() => startEdit(order)}>Edit</button>
                  <button onClick={() => handleDelete(order._id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
