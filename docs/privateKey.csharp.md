# `tls_private_key`

Refer to the Terraform Registory for docs: [`tls_private_key`](https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key).

# `privateKey` Submodule <a name="`privateKey` Submodule" id="@cdktf/provider-tls.privateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateKey <a name="PrivateKey" id="@cdktf/provider-tls.privateKey.PrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key tls_private_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new PrivateKey(Construct Scope, string Id, PrivateKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig">PrivateKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig">PrivateKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.resetEcdsaCurve">ResetEcdsaCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.resetRsaBits">ResetRsaBits</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tls.privateKey.PrivateKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tls.privateKey.PrivateKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-tls.privateKey.PrivateKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tls.privateKey.PrivateKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tls.privateKey.PrivateKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-tls.privateKey.PrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tls.privateKey.PrivateKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tls.privateKey.PrivateKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tls.privateKey.PrivateKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tls.privateKey.PrivateKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tls.privateKey.PrivateKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tls.privateKey.PrivateKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.privateKey.PrivateKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.privateKey.PrivateKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tls.privateKey.PrivateKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-tls.privateKey.PrivateKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-tls.privateKey.PrivateKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetEcdsaCurve` <a name="ResetEcdsaCurve" id="@cdktf/provider-tls.privateKey.PrivateKey.resetEcdsaCurve"></a>

```csharp
private void ResetEcdsaCurve()
```

##### `ResetRsaBits` <a name="ResetRsaBits" id="@cdktf/provider-tls.privateKey.PrivateKey.resetRsaBits"></a>

```csharp
private void ResetRsaBits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tls.privateKey.PrivateKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

PrivateKey.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.privateKey.PrivateKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tls.privateKey.PrivateKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

PrivateKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.privateKey.PrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tls.privateKey.PrivateKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

PrivateKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-tls.privateKey.PrivateKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

PrivateKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PrivateKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PrivateKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyOpenssh">PrivateKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyPem">PrivateKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyPemPkcs8">PrivateKeyPemPkcs8</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyFingerprintMd5">PublicKeyFingerprintMd5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyFingerprintSha256">PublicKeyFingerprintSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyOpenssh">PublicKeyOpenssh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyPem">PublicKeyPem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.ecdsaCurveInput">EcdsaCurveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.rsaBitsInput">RsaBitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.ecdsaCurve">EcdsaCurve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.rsaBits">RsaBits</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tls.privateKey.PrivateKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tls.privateKey.PrivateKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tls.privateKey.PrivateKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tls.privateKey.PrivateKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tls.privateKey.PrivateKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tls.privateKey.PrivateKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tls.privateKey.PrivateKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.privateKey.PrivateKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.privateKey.PrivateKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.privateKey.PrivateKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.privateKey.PrivateKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.privateKey.PrivateKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.privateKey.PrivateKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.privateKey.PrivateKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tls.privateKey.PrivateKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateKeyOpenssh`<sup>Required</sup> <a name="PrivateKeyOpenssh" id="@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyOpenssh"></a>

```csharp
public string PrivateKeyOpenssh { get; }
```

- *Type:* string

---

##### `PrivateKeyPem`<sup>Required</sup> <a name="PrivateKeyPem" id="@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyPem"></a>

```csharp
public string PrivateKeyPem { get; }
```

- *Type:* string

---

##### `PrivateKeyPemPkcs8`<sup>Required</sup> <a name="PrivateKeyPemPkcs8" id="@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyPemPkcs8"></a>

```csharp
public string PrivateKeyPemPkcs8 { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintMd5`<sup>Required</sup> <a name="PublicKeyFingerprintMd5" id="@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyFingerprintMd5"></a>

```csharp
public string PublicKeyFingerprintMd5 { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintSha256`<sup>Required</sup> <a name="PublicKeyFingerprintSha256" id="@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyFingerprintSha256"></a>

```csharp
public string PublicKeyFingerprintSha256 { get; }
```

- *Type:* string

---

##### `PublicKeyOpenssh`<sup>Required</sup> <a name="PublicKeyOpenssh" id="@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyOpenssh"></a>

```csharp
public string PublicKeyOpenssh { get; }
```

- *Type:* string

---

##### `PublicKeyPem`<sup>Required</sup> <a name="PublicKeyPem" id="@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyPem"></a>

```csharp
public string PublicKeyPem { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-tls.privateKey.PrivateKey.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `EcdsaCurveInput`<sup>Optional</sup> <a name="EcdsaCurveInput" id="@cdktf/provider-tls.privateKey.PrivateKey.property.ecdsaCurveInput"></a>

```csharp
public string EcdsaCurveInput { get; }
```

- *Type:* string

---

##### `RsaBitsInput`<sup>Optional</sup> <a name="RsaBitsInput" id="@cdktf/provider-tls.privateKey.PrivateKey.property.rsaBitsInput"></a>

```csharp
public double RsaBitsInput { get; }
```

- *Type:* double

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-tls.privateKey.PrivateKey.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `EcdsaCurve`<sup>Required</sup> <a name="EcdsaCurve" id="@cdktf/provider-tls.privateKey.PrivateKey.property.ecdsaCurve"></a>

```csharp
public string EcdsaCurve { get; }
```

- *Type:* string

---

##### `RsaBits`<sup>Required</sup> <a name="RsaBits" id="@cdktf/provider-tls.privateKey.PrivateKey.property.rsaBits"></a>

```csharp
public double RsaBits { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tls.privateKey.PrivateKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateKeyConfig <a name="PrivateKeyConfig" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Tls;

new PrivateKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Algorithm,
    string EcdsaCurve = null,
    double RsaBits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.ecdsaCurve">EcdsaCurve</a></code> | <code>string</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.rsaBits">RsaBits</a></code> | <code>double</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#algorithm PrivateKey#algorithm}

---

##### `EcdsaCurve`<sup>Optional</sup> <a name="EcdsaCurve" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.ecdsaCurve"></a>

```csharp
public string EcdsaCurve { get; set; }
```

- *Type:* string

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#ecdsa_curve PrivateKey#ecdsa_curve}

---

##### `RsaBits`<sup>Optional</sup> <a name="RsaBits" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.rsaBits"></a>

```csharp
public double RsaBits { get; set; }
```

- *Type:* double

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#rsa_bits PrivateKey#rsa_bits}

---



