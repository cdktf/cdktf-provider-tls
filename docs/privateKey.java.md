# `tls_private_key`

Refer to the Terraform Registory for docs: [`tls_private_key`](https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key).

# `privateKey` Submodule <a name="`privateKey` Submodule" id="@cdktf/provider-tls.privateKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateKey <a name="PrivateKey" id="@cdktf/provider-tls.privateKey.PrivateKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key tls_private_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.private_key.PrivateKey;

PrivateKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .algorithm(java.lang.String)
//  .ecdsaCurve(java.lang.String)
//  .rsaBits(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.ecdsaCurve">ecdsaCurve</a></code> | <code>java.lang.String</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.rsaBits">rsaBits</a></code> | <code>java.lang.Number</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.algorithm"></a>

- *Type:* java.lang.String

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#algorithm PrivateKey#algorithm}

---

##### `ecdsaCurve`<sup>Optional</sup> <a name="ecdsaCurve" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.ecdsaCurve"></a>

- *Type:* java.lang.String

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#ecdsa_curve PrivateKey#ecdsa_curve}

---

##### `rsaBits`<sup>Optional</sup> <a name="rsaBits" id="@cdktf/provider-tls.privateKey.PrivateKey.Initializer.parameter.rsaBits"></a>

- *Type:* java.lang.Number

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#rsa_bits PrivateKey#rsa_bits}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.resetEcdsaCurve">resetEcdsaCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.resetRsaBits">resetRsaBits</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tls.privateKey.PrivateKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tls.privateKey.PrivateKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tls.privateKey.PrivateKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tls.privateKey.PrivateKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tls.privateKey.PrivateKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tls.privateKey.PrivateKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tls.privateKey.PrivateKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tls.privateKey.PrivateKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tls.privateKey.PrivateKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tls.privateKey.PrivateKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.privateKey.PrivateKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tls.privateKey.PrivateKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.privateKey.PrivateKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.privateKey.PrivateKey.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tls.privateKey.PrivateKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tls.privateKey.PrivateKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tls.privateKey.PrivateKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tls.privateKey.PrivateKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetEcdsaCurve` <a name="resetEcdsaCurve" id="@cdktf/provider-tls.privateKey.PrivateKey.resetEcdsaCurve"></a>

```java
public void resetEcdsaCurve()
```

##### `resetRsaBits` <a name="resetRsaBits" id="@cdktf/provider-tls.privateKey.PrivateKey.resetRsaBits"></a>

```java
public void resetRsaBits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateKey resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tls.privateKey.PrivateKey.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tls.private_key.PrivateKey;

PrivateKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.privateKey.PrivateKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tls.privateKey.PrivateKey.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tls.private_key.PrivateKey;

PrivateKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.privateKey.PrivateKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tls.privateKey.PrivateKey.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tls.private_key.PrivateKey;

PrivateKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tls.privateKey.PrivateKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tls.private_key.PrivateKey;

PrivateKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PrivateKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PrivateKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PrivateKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PrivateKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.privateKey.PrivateKey.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PrivateKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyOpenssh">privateKeyOpenssh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyPem">privateKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyPemPkcs8">privateKeyPemPkcs8</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyFingerprintMd5">publicKeyFingerprintMd5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyFingerprintSha256">publicKeyFingerprintSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyOpenssh">publicKeyOpenssh</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyPem">publicKeyPem</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.ecdsaCurveInput">ecdsaCurveInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.rsaBitsInput">rsaBitsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.ecdsaCurve">ecdsaCurve</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.rsaBits">rsaBits</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tls.privateKey.PrivateKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tls.privateKey.PrivateKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tls.privateKey.PrivateKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tls.privateKey.PrivateKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tls.privateKey.PrivateKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tls.privateKey.PrivateKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tls.privateKey.PrivateKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.privateKey.PrivateKey.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.privateKey.PrivateKey.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.privateKey.PrivateKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.privateKey.PrivateKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.privateKey.PrivateKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.privateKey.PrivateKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.privateKey.PrivateKey.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tls.privateKey.PrivateKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateKeyOpenssh`<sup>Required</sup> <a name="privateKeyOpenssh" id="@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyOpenssh"></a>

```java
public java.lang.String getPrivateKeyOpenssh();
```

- *Type:* java.lang.String

---

##### `privateKeyPem`<sup>Required</sup> <a name="privateKeyPem" id="@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyPem"></a>

```java
public java.lang.String getPrivateKeyPem();
```

- *Type:* java.lang.String

---

##### `privateKeyPemPkcs8`<sup>Required</sup> <a name="privateKeyPemPkcs8" id="@cdktf/provider-tls.privateKey.PrivateKey.property.privateKeyPemPkcs8"></a>

```java
public java.lang.String getPrivateKeyPemPkcs8();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprintMd5`<sup>Required</sup> <a name="publicKeyFingerprintMd5" id="@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyFingerprintMd5"></a>

```java
public java.lang.String getPublicKeyFingerprintMd5();
```

- *Type:* java.lang.String

---

##### `publicKeyFingerprintSha256`<sup>Required</sup> <a name="publicKeyFingerprintSha256" id="@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyFingerprintSha256"></a>

```java
public java.lang.String getPublicKeyFingerprintSha256();
```

- *Type:* java.lang.String

---

##### `publicKeyOpenssh`<sup>Required</sup> <a name="publicKeyOpenssh" id="@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyOpenssh"></a>

```java
public java.lang.String getPublicKeyOpenssh();
```

- *Type:* java.lang.String

---

##### `publicKeyPem`<sup>Required</sup> <a name="publicKeyPem" id="@cdktf/provider-tls.privateKey.PrivateKey.property.publicKeyPem"></a>

```java
public java.lang.String getPublicKeyPem();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-tls.privateKey.PrivateKey.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `ecdsaCurveInput`<sup>Optional</sup> <a name="ecdsaCurveInput" id="@cdktf/provider-tls.privateKey.PrivateKey.property.ecdsaCurveInput"></a>

```java
public java.lang.String getEcdsaCurveInput();
```

- *Type:* java.lang.String

---

##### `rsaBitsInput`<sup>Optional</sup> <a name="rsaBitsInput" id="@cdktf/provider-tls.privateKey.PrivateKey.property.rsaBitsInput"></a>

```java
public java.lang.Number getRsaBitsInput();
```

- *Type:* java.lang.Number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-tls.privateKey.PrivateKey.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `ecdsaCurve`<sup>Required</sup> <a name="ecdsaCurve" id="@cdktf/provider-tls.privateKey.PrivateKey.property.ecdsaCurve"></a>

```java
public java.lang.String getEcdsaCurve();
```

- *Type:* java.lang.String

---

##### `rsaBits`<sup>Required</sup> <a name="rsaBits" id="@cdktf/provider-tls.privateKey.PrivateKey.property.rsaBits"></a>

```java
public java.lang.Number getRsaBits();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tls.privateKey.PrivateKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateKeyConfig <a name="PrivateKeyConfig" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tls.private_key.PrivateKeyConfig;

PrivateKeyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .algorithm(java.lang.String)
//  .ecdsaCurve(java.lang.String)
//  .rsaBits(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.ecdsaCurve">ecdsaCurve</a></code> | <code>java.lang.String</code> | When `algorithm` is `ECDSA`, the name of the elliptic curve to use. |
| <code><a href="#@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.rsaBits">rsaBits</a></code> | <code>java.lang.Number</code> | When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Name of the algorithm to use when generating the private key. Currently-supported values are: `RSA`, `ECDSA`, `ED25519`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#algorithm PrivateKey#algorithm}

---

##### `ecdsaCurve`<sup>Optional</sup> <a name="ecdsaCurve" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.ecdsaCurve"></a>

```java
public java.lang.String getEcdsaCurve();
```

- *Type:* java.lang.String

When `algorithm` is `ECDSA`, the name of the elliptic curve to use.

Currently-supported values are: `P224`, `P256`, `P384`, `P521`. (default: `P224`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#ecdsa_curve PrivateKey#ecdsa_curve}

---

##### `rsaBits`<sup>Optional</sup> <a name="rsaBits" id="@cdktf/provider-tls.privateKey.PrivateKeyConfig.property.rsaBits"></a>

```java
public java.lang.Number getRsaBits();
```

- *Type:* java.lang.Number

When `algorithm` is `RSA`, the size of the generated RSA key, in bits (default: `2048`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tls/4.0.4/docs/resources/private_key#rsa_bits PrivateKey#rsa_bits}

---



